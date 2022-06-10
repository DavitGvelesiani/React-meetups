import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(){
    return (
        <MeetupDetail />
    );
}


export async function getStaticPaths(){
    
}

export async function getStaticProps(context){

    const meetupID = context.params.meetupId;

    return {
        props: {
            meetupData: {

            }
        },
        revalidate: 1
    }
} 


export default MeetupDetails;