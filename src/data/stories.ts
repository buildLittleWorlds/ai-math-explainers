import type { MarkdownInstance } from 'astro';
export interface StoryData {
 discovery: string;
 title: string;
 summary: string;
 plateCaption: string;
 researchedThrough: string;
 timeline: {date:string;label:string;text:string;url:string}[];
 sources: {title:string;author:string;role:string;url:string;note:string}[];
}
const modules=import.meta.glob<MarkdownInstance<StoryData>>('../content/stories/*.md',{eager:true});
export const stories=Object.values(modules);
export const storyFor=(slug:string)=>stories.find(s=>s.frontmatter.discovery===slug);
export const storyUrl=(slug:string)=>`/ai-math-explainers/discoveries/${slug}/story/`;
