import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AllArticleAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  // Using tanstack query
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      console.log(res.data);
      return res.data;
    },
  });

  // functions
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/articles/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl capitalize mt-8">
        Here All article of this website
      </h2>
      {/*  card formate */}
      <div className="grid grid-cols-1 gap-5 my-10">
        {articles.map((item) => (
          <section key={item._id}>
            <div className="card card-side bg-base-100 shadow-xl font-serif ">
              <figure>
                <img src={item.image} className="w-80" alt="Movie" />
              </figure>
              <div className="p-3">
                <p>Article Title : {item.name}</p>
                <p>Author Name : {item.authorName} </p>
                <p>Author Email : {item.email} </p>
                <section className="flex items-center gap-5">
                  Author Photo :
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                      <div className="w-10">
                        <img src={item.authorImage} />
                      </div>
                    </div>
                  </div>
                </section>
                <p>Posted Date : {item.dateTime.slice(0, 10)}</p>
                <p>Status : {item.status}</p>
                <p>Publisher : {item.publisher}</p>

                {/*  main functionality */}
                <section className="flex gap-5 justify-center py-2 ">
                  <button className="btn btn-accent">Approve</button>
                  <button className="btn btn-warning">Decline</button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                  <button className="btn btn-outline btn-info">
                    Make Premium
                  </button>
                </section>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AllArticleAdmin;
