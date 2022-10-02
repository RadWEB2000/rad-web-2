const Page = () => {
    const redirect = () => {if(window !== undefined){return window.location.href = '/'}}
    return redirect();
}
export default Page;