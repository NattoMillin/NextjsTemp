const Page = ({ params }: { params: { id: string } }) => {
  // console.log(params);
  return <div className="m-4 font-bold">Blog ID: {params.id}</div>;
};

export default Page;
