sqlite> .mode box
sqlite> sqlite> SELECT albums WHERE num_sold >= 100000;
┌────┬──────────────┬─────────┬──────┬──────────┐
│ id │    title     │ band_id │ year │ num_sold │
├────┼──────────────┼─────────┼──────┼──────────┤
│ 3  │ The End      │ 1       │ 2020 │ 120000   │
│ 12 │ Under Water  │ 5       │ 2020 │ 106000   │
│ 13 │ Another Fork │ 5       │ 2021 │ 140000   │
└────┴──────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums WHERE year BETWEEN 2018 AND 2020;
┌────┬────────────────────┬─────────┬──────┬──────────┐
│ id │       title        │ band_id │ year │ num_sold │
├────┼────────────────────┼─────────┼──────┼──────────┤
│ 2  │ Again              │ 1       │ 2018 │ 30000    │
│ 3  │ The End            │ 1       │ 2020 │ 120000   │
│ 4  │ The Prelude        │ 2       │ 2020 │ 60000    │
│ 6  │ One                │ 3       │ 2018 │ 55000    │
│ 7  │ Two                │ 3       │ 2020 │ 80000    │
│ 9  │ Back To The Middle │ 4       │ 2019 │ 12000    │
│ 10 │ Where We Go        │ 4       │ 2020 │ 63000    │
│ 12 │ Under Water        │ 5       │ 2020 │ 106000   │
└────┴────────────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums WHERE year IN (2018, 2019, 2020);
┌────┬────────────────────┬─────────┬──────┬──────────┐
│ id │       title        │ band_id │ year │ num_sold │
├────┼────────────────────┼─────────┼──────┼──────────┤
│ 2  │ Again              │ 1       │ 2018 │ 30000    │
│ 3  │ The End            │ 1       │ 2020 │ 120000   │
│ 4  │ The Prelude        │ 2       │ 2020 │ 60000    │
│ 6  │ One                │ 3       │ 2018 │ 55000    │
│ 7  │ Two                │ 3       │ 2020 │ 80000    │
│ 9  │ Back To The Middle │ 4       │ 2019 │ 12000    │
│ 10 │ Where We Go        │ 4       │ 2020 │ 63000    │
│ 12 │ Under Water        │ 5       │ 2020 │ 106000   │
└────┴────────────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums WHERE band_ids IN (1, 3, 4);
Parse error: no such column: band_ids
  SELECT * FROM albums WHERE band_ids IN (1, 3, 4);
               error here ---^
sqlite> SELECT * FROM albums WHERE band_id IN (1, 3, 4);
┌────┬────────────────────┬─────────┬──────┬──────────┐
│ id │       title        │ band_id │ year │ num_sold │
├────┼────────────────────┼─────────┼──────┼──────────┤
│ 1  │ The Falling Box    │ 1       │ 2015 │ 25000    │
│ 2  │ Again              │ 1       │ 2018 │ 30000    │
│ 3  │ The End            │ 1       │ 2020 │ 120000   │
│ 6  │ One                │ 3       │ 2018 │ 55000    │
│ 7  │ Two                │ 3       │ 2020 │ 80000    │
│ 8  │ Three?             │ 3       │ 2021 │ 17000    │
│ 9  │ Back To The Middle │ 4       │ 2019 │ 12000    │
│ 10 │ Where We Go        │ 4       │ 2020 │ 63000    │
└────┴────────────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums WHERE title LIKE "The%";
┌────┬─────────────────┬─────────┬──────┬──────────┐
│ id │      title      │ band_id │ year │ num_sold │
├────┼─────────────────┼─────────┼──────┼──────────┤
│ 1  │ The Falling Box │ 1       │ 2015 │ 25000    │
│ 3  │ The End         │ 1       │ 2020 │ 120000   │
│ 4  │ The Prelude     │ 2       │ 2020 │ 60000    │
│ 11 │ The King River  │ 5       │ 2017 │ 85000    │
└────┴─────────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums ORDER BY num_sold DESC LIMIT 2;
┌────┬──────────────┬─────────┬──────┬──────────┐
│ id │    title     │ band_id │ year │ num_sold │
├────┼──────────────┼─────────┼──────┼──────────┤
│ 13 │ Another Fork │ 5       │ 2021 │ 140000   │
│ 3  │ The End      │ 1       │ 2020 │ 120000   │
└────┴──────────────┴─────────┴──────┴──────────┘
sqlite> SELECT * FROM albums ORDER BY num_sold DESC LIMIT 2 OFFSET 2;
┌────┬────────────────┬─────────┬──────┬──────────┐
│ id │     title      │ band_id │ year │ num_sold │
├────┼────────────────┼─────────┼──────┼──────────┤
│ 12 │ Under Water    │ 5       │ 2020 │ 106000   │
│ 11 │ The King River │ 5       │ 2017 │ 85000    │
└────┴────────────────┴─────────┴──────┴──────────┘
sqlite> 