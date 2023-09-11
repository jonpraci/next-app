import Header from '@/compponents/Header';
import { getAllEvents, getSingleEvents } from '../../helper/helper-ulits';
import MediaCard from '@/compponents/Card';
import styles from '../../styles/Card.module.css';
import Head from 'next/head';
const Single = (props) => {
    const { event } = props;
    // console.log(event);
    if (!event) {
        return <h4>Looding...</h4>
    }

    return <div>
        <Head>
        <title>{event.title}</title>
        <meta content={event.title} />
    </Head>
        <Header />
        <div className={styles.singleCard}>
            <MediaCard title={event.title} image={event.url} thumbnailUrl={event.thumbnailUrl} />
        </div>

    </div>
}


export async function getStaticProps({ params }) {
    const data = await getSingleEvents(params.id)
    return {
        props: {
            event: data
        },
        revalidate:20
    }
}

export async function getStaticPaths() {
    const allEvents = await getAllEvents();
    return {
        paths: allEvents.map((ele) => ({ params: { id: '' + ele.id } })),
        fallback: true
    }
}
export default Single;