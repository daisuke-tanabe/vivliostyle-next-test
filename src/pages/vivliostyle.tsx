import dynamic from 'next/dynamic';

export default function Vivliostyle () {
    const CSR = dynamic(() => import('@/components/Viewer').then((mod) => mod.Viewer), { ssr: false });
    return (

        <CSR />
    )
}