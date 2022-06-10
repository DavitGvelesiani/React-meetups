import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";


function Homepage(){
    return <MeetupList />
}  


export async function getStaticProps(){

    return {
        props: {
            
        },
        revalidate: 1
    }
} 


export default Homepage;