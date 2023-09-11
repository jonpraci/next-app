import { getAllEventsPaginated } from "@/helper/helper-ulits"
import styles from '../../styles/Card.module.css';
import { Grid, Item } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import MediaCard from "@/compponents/Card";
import { useState } from "react";
const { default: Header } = require("@/compponents/Header")

const SlicedData = ({ data, error }) => {
    const [page, setPage] = useState(0);
    const router = useRouter();
    const handleChange = async (event, value) => {
        await data;
        router.push(`/events/${value * 10}/10`);
        setPage((prev) => prev = value);

    };
    const goSinglePage = (id) => {
        router.push(`/events/${id}`)
    }
    console.log(data);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return <>
        <Header />
        <div className={styles.pairCard}>
            <h1>Hey From Events</h1>
            <Stack spacing={2} >
                <Pagination count={500 - 1} onChange={handleChange} />
            </Stack>
            <Grid container justifyContent='center' gap={2}>
                {
                    data.map((ele) => {
                        return <Grid onClick={() => goSinglePage(ele.id)} width={'100%'} item sm={4} md={3} lg={3} key={ele.id}>
                            <MediaCard key={ele.id} title={ele.title} image={ele.url} thumbnailUrl={ele.thumbnailUrl} />
                        </Grid>
                    })
                }
            </Grid>

        </div>
    </>

}

export async function getServerSideProps(context) {

    const { params } = await context;
    try {
        const data = await getAllEventsPaginated(params.slug[0], params.slug[1]);
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        return {
            props: {
                error: "Failed to fetch data",
            },
        };
    }
}

export default SlicedData;