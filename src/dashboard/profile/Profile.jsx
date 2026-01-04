import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="card w-96 bg-base-100 shadow-xl border border-primary/20">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="User" />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{user?.displayName}</h2>
                    <p className="text-secondary overflow-hidden">{user?.email}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-outline btn-sm">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
