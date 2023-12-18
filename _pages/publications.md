---
title: Publications
permalink: /publications/
layout: page
excerpt: All publication to date.
---

{% assign sorted = site.publications | sort: 'date' | reverse %}
{%- for pub in sorted-%}
{%- capture current_year -%}{{ pub.date | date: "%Y" }}{%- endcapture -%}
{%- unless current_year == previous_year -%}
## {{ current_year }}
{%- assign previous_year = current_year -%}
{%- endunless -%}
{% include publication_summary.html pub=pub %}
{%- endfor -%}