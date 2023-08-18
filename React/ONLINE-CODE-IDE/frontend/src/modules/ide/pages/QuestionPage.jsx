import Container from '@mui/material/Container';
import { Header } from '../../../shared/components/Header';
import Grid from '@mui/material/Grid';
import { Ide } from '../components/Ide';
export const QuestionPage=()=>{
    return(
        <>
         <Container >
         <Header/>
         <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>question</h2>
        </Grid>
        <Grid item xs={6}> 
         <Ide/>
        </Grid>
        </Grid>

         </Container>
        
        </>
    );
}