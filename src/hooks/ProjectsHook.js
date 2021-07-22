import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";

export const ProjectData = () => {

  const data = useStaticQuery(
    graphql`
      {
        allProjectsJson{
            edges{
              node{
                
                projectName
        
              }
              
            }
          }
      }
    `
  )
  return  data.allProjectsJson.edges[0].projectName;
}

// const projects = data.allProjectsJson.edges;
//   return (
//       <Layout>
//           <p></p>
//       </Layout>