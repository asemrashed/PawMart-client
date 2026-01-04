import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const data = [
        {
            name: 'Users',
            count: stats.totalUsers || 0,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Posts',
            count: stats.totalPosts || 0,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Orders',
            count: stats.totalOrders || 0,
            pv: 9800,
            amt: 2290,
        },
    ];

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-5">Hi, Welcome Back!</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                <div className="stat bg-primary text-primary-content rounded-xl shadow-lg">
                    <div className="stat-figure text-primary-content">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="stat-title text-primary-content/80">Total Users</div>
                    <div className="stat-value">{stats.totalUsers || 0}</div>
                    <div className="stat-desc text-primary-content/80">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-secondary text-secondary-content rounded-xl shadow-lg">
                    <div className="stat-figure text-secondary-content">
                        <MdOutlinePets className="text-3xl" />
                    </div>
                    <div className="stat-title text-secondary-content/80">Total Posts</div>
                    <div className="stat-value">{stats.totalPosts || 0}</div>
                    <div className="stat-desc text-secondary-content/80">↗︎ 400 (22%)</div>
                </div>

                <div className="stat bg-accent text-accent-content rounded-xl shadow-lg">
                    <div className="stat-figure text-accent-content">
                        <FaBoxOpen className="text-3xl" />
                    </div>
                    <div className="stat-title text-accent-content/80">Total Orders</div>
                    <div className="stat-value">{stats.totalOrders || 0}</div>
                    <div className="stat-desc text-accent-content/80">↘︎ 90 (14%)</div>
                </div>
            </div>

            <div className="bg-base-100 p-5 rounded-xl shadow-xl w-full h-[400px]">
                 <h3 className="text-xl font-semibold mb-5 pl-4 border-l-4 border-primary">Platform Statistics</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor: '#fff', borderRadius: '10px'}} />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;