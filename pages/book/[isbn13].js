export default function BookDeatail() {
  return <div className="container-fluid">hello</div>;
}

export const getServerSideProps = async (context) => {
  console.log(context.params.isbn13);
  return {
    props: {
      ab: [],
    },
  };
};
