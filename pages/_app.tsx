import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from '@/Layout/MainLayout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import { store } from './../store/store';

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MainLayout><Component {...pageProps} /></MainLayout>
            </QueryClientProvider>
        </Provider>
    )
}
