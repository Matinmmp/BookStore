import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from 'next/navigation';
import MainLayout from '@/Layout/MainLayout';
import { store } from './../store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.css';

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    const router =usePathname();
    if(router === '/user/login')
    return (
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
        <ToastContainer/>
    </Provider>)
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MainLayout><Component {...pageProps} /></MainLayout>
            </QueryClientProvider>
            <ToastContainer/>
        </Provider>
    )
}
