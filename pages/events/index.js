import MediaCard from "@/compponents/Card";
import { getAllEvents } from '../../helper/helper-ulits';
import styles from '../../styles/Card.module.css';
import Header from "@/compponents/Header";
import { Grid, Item } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import Head from "next/head";
const Events = ({ events }) => {
    const router = useRouter();
    const handleChange = (event, value) => {
        router.push(`/events/${value * 10}/10`)
    };
    const goSinglePage = (id) => {
        router.push(`/events/${id}`)
    }
    return <>
    <Head>
        <title>all events</title>
    </Head>
        <Header />
        <div className={styles.pairCard}>
            <h1>Hey From Events</h1>

            <Stack spacing={2}>
                <Pagination count={10}  onChange={handleChange} />
            </Stack>
            <Grid container justifyContent='center' gap={2}>
                {
                    events.map((ele) => {
                        return <Grid onClick={() => goSinglePage(ele.id)} width={'100%'} item sm={4} md={3} lg={3} key={ele.id}>
                            <MediaCard key={ele.id} title={ele.title} image={ele.url} thumbnailUrl={ele.thumbnailUrl} />
                        </Grid>
                    })
                }
            </Grid>
            
        </div>
    </>
}

export async function getStaticProps() {
    const allEvents = await getAllEvents();
    return {
        props: {
            events: allEvents
        },
        revalidate:159
    }
}




export default Events;