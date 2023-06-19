package com.utils.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
public class PieChartDto {
    public List<Double> series;
    public List<String> colors;
    public List<String> names;
}
