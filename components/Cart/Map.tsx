import Mapir from "mapir-react-component";
 
const Map = Mapir.setToken({
    transformRequest: (url:any)=> {
        return {
            url: url,
            headers: { 
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2ZWM3MDU0MjFiMTNjYzM1MTI1MjI4NjY3ODY4MGI3Mzg5N2E2MTc0MjU1MzRjMjhiODU1MDk1NzI0NmZiMGYyMWZmOTRlMjFiMjM3MWU3In0.eyJhdWQiOiIyNDEwNiIsImp0aSI6IjQ2ZWM3MDU0MjFiMTNjYzM1MTI1MjI4NjY3ODY4MGI3Mzg5N2E2MTc0MjU1MzRjMjhiODU1MDk1NzI0NmZiMGYyMWZmOTRlMjFiMjM3MWU3IiwiaWF0IjoxNjk0NTQ5MDUwLCJuYmYiOjE2OTQ1NDkwNTAsImV4cCI6MTY5NzE0MTA1MCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.jr5f2asRd1h3lnvgs-4lh0OKnD46EiHvcj-_7H8k5adpYOWa0fKDhjWix9zu-g31RADzYg1qMCA0SloxPJoqACYHDKDhgS8-LJPUABsdxQY8vyfLwnk8RQNBWoPwZGad-tybztMm1MfxlIxY7R3DPkkJwK7S1aeXR_-sq72VJAtftRmiyS3aoPFIL7O16PpImiw7v6WWxXEHOx6JmOq_5QcJ95b4_NQCPJ3YLMaAEo-m26NXOW7BHLHVzalQuuLNSdhlGuYP_Qro4Vk1kPx3BO3h6egtReZMQ_2pAkUztvARoVegSEgYNq3sTXup45Kp5-pTCvw7hF0ghqKjTV77WA', //Mapir access token
                'Mapir-SDK': 'reactjs'
            }
        }
    }
});

export default Map
 