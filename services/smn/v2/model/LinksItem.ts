

export class LinksItem {
    public href?: string;
    public rel?: string;
    public constructor(href?: string, rel?: string) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): LinksItem {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): LinksItem {
        this['rel'] = rel;
        return this;
    }
}