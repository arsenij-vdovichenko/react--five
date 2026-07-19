import data from "../../data.json"
import Title from "../Title/Title"
import { List,item,Title,Text } from "./Data.styled"
function Data(){
    return(
        <List>
        {data.map(({id, name,age, isOnline, role, points})=>{
            return(
            <item key={id} isOnline ={isOnline}>
                <Title>{name}</Title>
                <p>{age}</p>
                <p>{isOnline ? "active" : "not active"}</p>
                <Text $role={role}>{role}</Text>
                <p>{points}</p>
            </item>
            )
        })}
    </List>
    )
}
export default Data