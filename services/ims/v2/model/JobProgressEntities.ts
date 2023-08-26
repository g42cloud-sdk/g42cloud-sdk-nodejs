

export class JobProgressEntities {
    private 'image_id'?: string;
    private 'current_task'?: string;
    private 'image_name'?: string;
    private 'process_percent'?: number;
    public subJobId?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): JobProgressEntities {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withCurrentTask(currentTask: string): JobProgressEntities {
        this['current_task'] = currentTask;
        return this;
    }
    public set currentTask(currentTask: string  | undefined) {
        this['current_task'] = currentTask;
    }
    public get currentTask(): string | undefined {
        return this['current_task'];
    }
    public withImageName(imageName: string): JobProgressEntities {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withProcessPercent(processPercent: number): JobProgressEntities {
        this['process_percent'] = processPercent;
        return this;
    }
    public set processPercent(processPercent: number  | undefined) {
        this['process_percent'] = processPercent;
    }
    public get processPercent(): number | undefined {
        return this['process_percent'];
    }
    public withSubJobId(subJobId: string): JobProgressEntities {
        this['subJobId'] = subJobId;
        return this;
    }
}