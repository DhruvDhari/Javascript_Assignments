import Container from '@mui/material/Container';
import { Header } from '../../../shared/components/Header';
import Grid from '@mui/material/Grid';
import Question from '../components/question';

export const QuestionPage = ()=>{
    return ( <Container >
                <Header/>
                <Grid container spacing={2}>
        <Grid item xs={6}>
            <Question/>
        </Grid>
        <Grid item xs={6}>
            ONLINE IDE

            <h3>Write Code</h3>
        </Grid>
        </Grid>
    </Container>)
}