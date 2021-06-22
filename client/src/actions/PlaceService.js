import { useSnackbar } from 'notistack';
import axios from 'axios'



export function useSendPlace() {
    const { enqueueSnackbar } = useSnackbar();

    const sendPlace = formData => {
       

        axios.post(`/api/places/new`, 
            formData
            )
          .then(function (response) {
            console.log(response);
            enqueueSnackbar('Place is added successfully', {
              variant: 'success'
            })
          })
        .catch(() =>
        enqueueSnackbar('Sorry Place could not be added(sendPlace error)', {
            variant: 'error'
        })
        );
        
    };
    return sendPlace;
}