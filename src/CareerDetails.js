import { useLoaderData, useParams } from "react-router-dom"
 
 export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    return (
   <div className="Career-details">
      
      <h2>Career details for : {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>

    <div className="details">
      <p>
            career details pages<br/>
            vLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi
     </p>
    </div>
  </div>
    )
}

 export const careerDetailsLoader = async ({params}) => {
     const{ id } = params

    const res = await fetch(`http://localhost:4000/careers/${id}`);
    
    if (!res.ok) {
      throw Error('Could not find the career');
    }

    const data = await res.json();
    return data;
 }