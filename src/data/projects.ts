export type Project = {
    title: string;
    slug: string;
    description: string;
    tags: string[],
    repoUrl?: string;
    liveUrl?: string,
    images?: string[];
}

export const projects: Project[] = [
  {
    title: "Quiztopia ",
    slug: "quiztopia-API",
    description: "serverless framework, middy. JSON Web Token., API Gateway, AWS-Lambda, DynamoDB",
    tags: ["AWS", "LAMBDA", "Serverless", "DynamoDB"],
    repoUrl: "https://github.com/Robinjorgensen123/quiztopia-api",
    liveUrl: ""
  },
  {
    title: "Filmrecentions Platform",
    slug: "image-galleri",
    description: "NoSql,Mongoose,API",
    tags: ["Mongoose"],
    repoUrl: "https://github.com/Robinjorgensen123/nosql-filmrecentionsplatform"
  },
  {
    title: "Ankan Airbean",
    slug: "Ankan-airbean",
    description: "frontend-ramverk, typescript",
    tags: ["React", "Typescript"],
    repoUrl: "https://github.com/Robinjorgensen123/frontend-ramverk-yumyum-exam/blob/main/index.html"
  }
]