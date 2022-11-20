import service from ".";

export function login(data: any) {
  return service.request({
    method: "post",
    url: "/login",
    data
  });
}