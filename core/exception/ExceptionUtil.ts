/*
 * Copyright 2023 G42 Technologies Co.,Ltd.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ClientRequestException } from "./ClientRequestException";
import { ExceptionResponse } from "./ExceptionResponse";
import { SdkException } from "./SdkException";
import { ServerResponseException } from "./ServerResponseException";
import { ServiceResponseException } from "./ServiceResponseException";

export class ExceptionUtil {
  static generalException(exception: ExceptionResponse): SdkException {
    const { data = {}, status, message, requestId } = exception;
    const { error, error_code, error_msg, encoded_authorization_message } = data;

    const errorCode = error?.code ?? error_code;
    const errorMsg = error?.message ?? error_msg ?? message;
    const encodedAuthorizationMessage =
      error?.encoded_authorization_message ?? encoded_authorization_message;
    const httpStatusCode = status;

    if (httpStatusCode) {
      if (isClientError(httpStatusCode)) {
        return new ClientRequestException(
          httpStatusCode,
          errorMsg,
          errorCode,
          requestId,
          encodedAuthorizationMessage
        );
      } else if (isServerError(httpStatusCode)) {
        return new ServerResponseException(
          httpStatusCode,
          errorMsg,
          errorCode,
          requestId,
          encodedAuthorizationMessage
        );
      }
    }
    return new ServiceResponseException(
      httpStatusCode,
      errorMsg,
      errorCode,
      requestId,
      encodedAuthorizationMessage
    );
  }
}

function isClientError(statusCode: number): boolean {
  return statusCode >= 400 && statusCode < 500;
}

function isServerError(statusCode: number): boolean {
  return statusCode >= 500 && statusCode < 600;
}
