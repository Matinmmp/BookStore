import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from '@/Layout/MainLayout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import { store } from './../store/store';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    const router =usePathname();
    console.log(router);
    if(router === '/user/login')
    return (
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
        <ToastContainer/>
    </Provider>
)
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MainLayout><Component {...pageProps} /></MainLayout>
            </QueryClientProvider>
            <ToastContainer/>
        </Provider>
    )
}
