import { Outlet } from "react-router-dom";



export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        
        <p>This is the careers layout pages</p>
        <Outlet /> 
    </div>
  )
}

