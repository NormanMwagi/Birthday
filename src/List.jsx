
import Person from "./Person";
const List = ({people}) => {
    return (  
        <div>
            <ul>{
                people.map(
                    (person) => {
                        return <Person key={person.id} {...person} />;
                }
                )
                    }
            </ul>


        </div>
    );
}
 
export default List;