import { apiSlice } from "./apiSlice";
export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: "/users/register",
				method: "POST",
				body: data,
			}),
		}),
		login: builder.mutation({
			query: (data) => ({
				url: "/users/login",
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/users/logout",
				method: "POST",
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
	usersApiSlice;
