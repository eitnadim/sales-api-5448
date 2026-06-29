package com.example.sales.dto;
import lombok.*;
@Data @AllArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String  message;
    private T       data;
    public static <T> ApiResponse<T> success(T data) { return new ApiResponse<>(true, "OK", data); }
    public static <T> ApiResponse<T> error(String msg) { return new ApiResponse<>(false, msg, null); }
}
