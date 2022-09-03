export default function handler(request, response) {
	let html = atob(`PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iemgtY24iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bGluayByZWw9Imljb24iaHJlZj0iZGF0YTo7YmFzZTY0LD0iPjxtZXRhIG5hbWU9InZpZXdwb3J0ImNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTUiPjx0aXRsZT5jaWN1dmMncyBibG9nCgk8L3RpdGxlPgoJPHNjcmlwdD4KCWxldCBwb3J0PTEyMzY0O2xldCBob3N0PWBjZG4ubGVjdGluZS50azoke3BvcnR9YDtsZXQgcHJlZml4PWBodHRwczovLyR7aG9zdH1gOygoKT0+e2NvbnN0IE5ldHdvcmtQcm94eT17b3JpZ2luRmV0Y2g6bnVsbCxvcmlnaW5DcmVhdGVFbGVtZW50Om51bGwsZml4VVJMKHVybCl7aWYodXJsIGluc3RhbmNlb2YgVVJMKXt1cmw9dXJsLnVybH1sZXQgdXJsU3RyaW5nPXVybDtpZih1cmxTdHJpbmcuc3RhcnRzV2l0aCgiLyIpKXt1cmxTdHJpbmc9YCR7cHJlZml4fSR7dXJsU3RyaW5nfWB9dHJ5e2NvbnN0IG5ld1VSTD1uZXcgVVJMKHVybFN0cmluZyk7aWYobmV3VVJMLmhvc3QhPWhvc3Qpe25ld1VSTC5ob3N0PWhvc3R9cmV0dXJuIG5ld1VSTH1jYXRjaChleCl7Y29uc29sZS5sb2coYEludmFsaWQgdXJsICR7dXJsU3RyaW5nfWApfX0sbmV0d29ya0hhbmRsZXIoZmV0Y2gscmVxdWVzdCl7Y29uc3QgbmV3UmVxdWVzdD1uZXcgUmVxdWVzdCh0aGlzLmZpeFVSTChyZXF1ZXN0LnVybCkse21ldGhvZDpyZXF1ZXN0Lm1ldGhvZCxoZWFkZXJzOnJlcXVlc3QuaGVhZGVycyxyZWRpcmVjdDpyZXF1ZXN0LnJlZGlyZWN0LHJlZmVycmVyOnJlcXVlc3QucmVmZXJyZXIscmVmZXJyZXJQb2xpY3k6cmVxdWVzdC5yZWZlcnJlclBvbGljeSxjYWNoZTpyZXF1ZXN0LmNhY2hlLGNyZWRlbnRpYWxzOnJlcXVlc3QuY3JlZGVudGlhbHMsbW9kZTpyZXF1ZXN0Lm1vZGV9KTtyZXR1cm4gZmV0Y2gobmV3UmVxdWVzdCl9LGhvb2soKXtjb25zdCB0aGlzXz10aGlzO3RoaXNfLm9yaWdpbkZldGNoPXdpbmRvdy5mZXRjaDt0aGlzXy5vcmlnaW5DcmVhdGVFbGVtZW50PURvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LmJpbmQoZG9jdW1lbnQpO3dpbmRvdy5mZXRjaD0oLi4uYXJncyk9PnRoaXNfLm5ld0ZldGNoLmFwcGx5KHRoaXNfLGFyZ3MpO2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQ9KC4uLmFyZ3MpPT50aGlzXy5uZXdDcmVhdGVFbGVtZW50LmFwcGx5KHRoaXNfLGFyZ3MpfSxuZXdGZXRjaChpbnB1dCxpbml0KXtyZXR1cm4gdGhpcy5uZXR3b3JrSGFuZGxlcih0aGlzLm9yaWdpbkZldGNoLG5ldyBSZXF1ZXN0KGlucHV0LGluaXQpKX0sbmV3Q3JlYXRlRWxlbWVudChsb2NhbE5hbWUsb3B0aW9ucyl7Y29uc3QgdGhpc189TmV0d29ya1Byb3h5O3N3aXRjaChsb2NhbE5hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZSJpbWciOmNhc2Uic2NyaXB0Ijp7Y29uc3Qgc2NyaXB0PXRoaXMub3JpZ2luQ3JlYXRlRWxlbWVudChsb2NhbE5hbWUsb3B0aW9ucyk7Y29uc3Qgc3JjU2V0dGVyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTFNjcmlwdEVsZW1lbnQucHJvdG90eXBlLCJzcmMiKS5zZXQ7Y29uc3Qgc3JjU2V0QXR0cmlidXRlPXNjcmlwdC5zZXRBdHRyaWJ1dGU7bGV0IHNyY1N0b3JhZ2U9IiI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHNjcmlwdCwic3JjIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHNyY1N0b3JhZ2V9LHNldDpmdW5jdGlvbih2YWx1ZSl7c3JjU3RvcmFnZT12YWx1ZTtzcmNTZXR0ZXIuYmluZCh0aGlzKSh0aGlzXy5maXhVUkwodmFsdWUpKX19KTtzY3JpcHQuc2V0QXR0cmlidXRlPShhdHRyLHZhbHVlKT0+e2lmKGF0dHI9PT0ic3JjIil7c3JjU2V0QXR0cmlidXRlLmFwcGx5KHNjcmlwdCxbYXR0cix0aGlzXy5maXhVUkwodmFsdWUpXSl9ZWxzZXtzcmNTZXRBdHRyaWJ1dGUuYXBwbHkoc2NyaXB0LFthdHRyLHZhbHVlXSl9fTtyZXR1cm4gc2NyaXB0fWNhc2UibGluayI6e2NvbnN0IGxpbms9dGhpcy5vcmlnaW5DcmVhdGVFbGVtZW50KGxvY2FsTmFtZSxvcHRpb25zKTtjb25zdCBocmVmU2V0dGVyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTExpbmtFbGVtZW50LnByb3RvdHlwZSwiaHJlZiIpLnNldDtsZXQgaHJlZlN0b3JhZ2U9IiI7Y29uc3Qgc3JjU2V0QXR0cmlidXRlPWxpbmsuc2V0QXR0cmlidXRlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShsaW5rLCJocmVmIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGhyZWZTdG9yYWdlfSxzZXQ6ZnVuY3Rpb24odmFsdWUpe2hyZWZTdG9yYWdlPXZhbHVlO2hyZWZTZXR0ZXIuYmluZCh0aGlzKSh0aGlzXy5maXhVUkwodmFsdWUpKX19KTtsaW5rLnNldEF0dHJpYnV0ZT0oYXR0cix2YWx1ZSk9PntpZihhdHRyPT09ImhyZWYiKXtzcmNTZXRBdHRyaWJ1dGUuYXBwbHkobGluayxbYXR0cix0aGlzXy5maXhVUkwodmFsdWUpXSl9ZWxzZXtzcmNTZXRBdHRyaWJ1dGUuYXBwbHkobGluayxbYXR0cix2YWx1ZV0pfX07cmV0dXJuIGxpbmt9ZGVmYXVsdDp7cmV0dXJuIHRoaXMub3JpZ2luQ3JlYXRlRWxlbWVudChsb2NhbE5hbWUsb3B0aW9ucyl9fX19O3dpbmRvdy5OZXR3b3JrUHJveHk9TmV0d29ya1Byb3h5fSkoKTtOZXR3b3JrUHJveHkuaG9vaygpO2Z1bmN0aW9uIGxvYWRDc3ModXJsKXtjb25zdCBjc3M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgibGluayIpO2Nzcy5yZWw9InN0eWxlc2hlZXQiO2Nzcy5ocmVmPXVybDtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyl9bG9hZENzcygiL3N0YXRpYy9hc3NldHMvY3NzL2Z3LmNzcyIpO2xvYWRDc3MoIi9zdGF0aWMvYXNzZXRzL2Nzcy9tZHVpLm1pbi5jc3MiKTsoKCk9PntsZXQgbG9hZGVkUGFja2FnZXM9bmV3IFNldDtsZXQgbG9hZGVkTW9kdWxlcz1uZXcgU2V0O2xldCB1bnJlc29sdmVkUGFja2FnZT1bXTtsZXQgcmVzb2x2ZWRQYWNrYWdlcztsZXQgd2FpdFJlcXVpcmU9W107bGV0IGNvbmZpZz17YnVuZGxlczp7fX07ZnVuY3Rpb24gdHJ5TG9hZFBhY2thZ2UocGtnTmFtZSl7Zm9yKGxldCBpIGluIGNvbmZpZy5idW5kbGVzKXtpZihsb2FkZWRNb2R1bGVzLmhhcyhpKSljb250aW51ZTtmb3IobGV0IGogb2YgY29uZmlnLmJ1bmRsZXNbaV0pe2lmKGo9PT1wa2dOYW1lKXtsZXQgc2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoImFzeW5jIiwiIik7c2NyaXB0LnNyYz1pKyIuanMiO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtsb2FkZWRNb2R1bGVzLmFkZChpKTtyZXR1cm59fX19ZnVuY3Rpb24gdXBkYXRlV2FpdFJlcXVpcmVRdWV1ZSgpe3dhaXRSZXF1aXJlPXdhaXRSZXF1aXJlLmZpbHRlcihlPT57Zm9yKGxldCBpIG9mIGUuZGVwcyl7aWYocmVzb2x2ZWRQYWNrYWdlc1tpXT09dW5kZWZpbmVkKXJldHVybiB0cnVlfWxldCBkZXBPYmplY3RzPWUuZGVwcy5tYXAodj0+e2lmKHY9PT0iZXhwb3J0cyIpcmV0dXJue307cmV0dXJuIHJlc29sdmVkUGFja2FnZXNbdl19KTtlLmNhbGxiYWNrLmFwcGx5KGUsZGVwT2JqZWN0cyk7cmV0dXJuIGZhbHNlfSl9ZnVuY3Rpb24gcmVzb2x2ZUFsbFBhY2thZ2VzKCl7bGV0IHF1ZXVlPVtdO2Rve2ZvcihsZXQgaSBvZiBxdWV1ZSl7bGV0IGV4cG9ydHNPYmplY3Q9e307bGV0IGRlcE9iamVjdHM9aS5kZXBzLm1hcChlPT57aWYoZT09PSJleHBvcnRzIilyZXR1cm4gZXhwb3J0c09iamVjdDtyZXR1cm4gcmVzb2x2ZWRQYWNrYWdlc1tlXX0pO2kuY2FsbGJhY2suYXBwbHkoaSxkZXBPYmplY3RzKTtyZXNvbHZlZFBhY2thZ2VzW2kubmFtZV09ZXhwb3J0c09iamVjdH1xdWV1ZT1bXTtmb3IobGV0IGkgb2YgdW5yZXNvbHZlZFBhY2thZ2Upe2kudW5yZXNvbHZlZERlcHM9aS51bnJlc29sdmVkRGVwcy5maWx0ZXIoZT0+cmVzb2x2ZWRQYWNrYWdlc1tlXT09dW5kZWZpbmVkKTtpZihpLnVucmVzb2x2ZWREZXBzLmxlbmd0aCE9MCl7aS51bnJlc29sdmVkRGVwcy5mb3JFYWNoKGU9PntpZighbG9hZGVkUGFja2FnZXMuaGFzKGUpKXRyeUxvYWRQYWNrYWdlKGUpfSl9ZWxzZXtxdWV1ZS5wdXNoKGkpfX11bnJlc29sdmVkUGFja2FnZT11bnJlc29sdmVkUGFja2FnZS5maWx0ZXIoZT0+ZS51bnJlc29sdmVkRGVwcy5sZW5ndGgpfXdoaWxlKHF1ZXVlLmxlbmd0aCk7dXBkYXRlV2FpdFJlcXVpcmVRdWV1ZSgpfWxldCByZXF1aXJlX2ltcGw9ZnVuY3Rpb24ocGtncyxjYWxsYmFjayl7bGV0IHVucmVzb2x2ZWRQYWNrYWdlcz1wa2dzLmZpbHRlcihlPT5yZXNvbHZlZFBhY2thZ2VzW2VdPT11bmRlZmluZWQpO2xldCB1bmtub3duUGFja2FnZXM9dW5yZXNvbHZlZFBhY2thZ2VzLmZpbHRlcihlPT4hbG9hZGVkUGFja2FnZXMuaGFzKGUpKTtpZih1bnJlc29sdmVkUGFja2FnZXMubGVuZ3RoKXtpZih1bmtub3duUGFja2FnZXMpe2ZvcihsZXQgaSBvZiB1bmtub3duUGFja2FnZXMpdHJ5TG9hZFBhY2thZ2UoaSl9d2FpdFJlcXVpcmUucHVzaCh7ZGVwczpwa2dzLGNhbGxiYWNrOmNhbGxiYWNrfSl9ZWxzZXtsZXQgZGVwT2JqZWN0cz1wa2dzLm1hcCh2PT57aWYodj09PSJleHBvcnRzIilyZXR1cm57fTtyZXR1cm4gcmVzb2x2ZWRQYWNrYWdlc1t2XX0pO2NhbGxiYWNrLmFwcGx5KG51bGwsZGVwT2JqZWN0cyl9fTtsZXQgZGVmaW5lX2ltcGw9ZnVuY3Rpb24obmFtZSxwa2dzLGNhbGxiYWNrKXtjb25zb2xlLmxvZyhgZGVmaW5lICR7bmFtZX1gKTt1bnJlc29sdmVkUGFja2FnZS5wdXNoKHtuYW1lOm5hbWUsZGVwczpwa2dzLHVucmVzb2x2ZWREZXBzOnBrZ3MsY2FsbGJhY2s6Y2FsbGJhY2t9KTtsb2FkZWRQYWNrYWdlcy5hZGQobmFtZSk7cmVzb2x2ZUFsbFBhY2thZ2VzKCl9O3Jlc29sdmVkUGFja2FnZXM9e3JlcXVpcmU6cmVxdWlyZV9pbXBsLGV4cG9ydHM6e319O3dpbmRvdy5yZXF1aXJlPXJlcXVpcmVfaW1wbDt3aW5kb3cuZGVmaW5lPWRlZmluZV9pbXBsO3dpbmRvdy5yZXNvbHZlQWxsUGFja2FnZXM9cmVzb2x2ZUFsbFBhY2thZ2VzO3JlcXVpcmVfaW1wbC5jb25maWc9ZnVuY3Rpb24oY2ZnKXtjb25maWc9Y2ZnfTtkZWZpbmVfaW1wbC5hbWQ9dHJ1ZTtmdW5jdGlvbiByZXF1aXJlQXN5bmMobmFtZSl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pnt0cnl7cmVxdWlyZShuYW1lLCguLi5vYmopPT57cmVzb2x2ZShvYmopfSl9Y2F0Y2goZSl7cmVqZWN0KGUpfX0pfXdpbmRvdy5yZXF1aXJlQXN5bmM9cmVxdWlyZUFzeW5jO3dpbmRvdy53YWl0UmVxdWlyZT13YWl0UmVxdWlyZTt3aW5kb3cudXBkYXRlV2FpdFJlcXVpcmVRdWV1ZT11cGRhdGVXYWl0UmVxdWlyZVF1ZXVlO2Z1bmN0aW9uIGxvYWQoKXtyZXF1aXJlLmNvbmZpZyh7cGFja2FnZXM6W10sYnVuZGxlczp7Ii9zdGF0aWMvYXNzZXRzL2pzL3Z1ZS92dWUzIjpbInZ1ZSJdLCIvc3RhdGljL2Fzc2V0cy9qcy92ZW5kb3IvdmVuZG9yLXBhdGNoZWQiOlsiYm9vdHN0cmFwIiwidXRpbC9wcm90b2NvbEJ1ZmZlci9wcm90b2NvbEJ1ZmZlciIsImZyYW1ld29yay9uZXR3b3JrL05ldHdvcmtNYW5hZ2VyIiwiZnJhbWV3b3JrL25ldHdvcmsvZG93bmxvYWQvZG93bmxvYWRNYW5hZ2VyIl0sIi9zdGF0aWMvYXNzZXRzL2pzL21hdGhqYXgvdGV4LXN2Zy1mdWxsIjpbIm1hdGhqYXgiXSwiL3N0YXRpYy9hc3NldHMvanMva2F0ZXgiOlsia2F0ZXgiXX0sYnVuZGxlUmVnRXhwOnsiL3N0YXRpYy9hc3NldHMvanMvdmVuZG9yL3ZlbmRvci1wYXRjaGVkIjpbInVpKiJdfX0pO2lmKHNlbGYgaW5zdGFuY2VvZiBXaW5kb3cpe3JlcXVpcmUoWyJib290c3RyYXAiXSwoKT0+e30pO3JlcXVpcmUoWyJ2dWUiXSwoKT0+e30pO3JlcXVpcmUoWyJrYXRleCJdLCgpPT57fSl9fShmdW5jdGlvbiBpbml0TGF5b3V0KCl7aWYod2luZG93LmluaXRIYW5kbGVyKXt3aW5kb3cuaW5pdEhhbmRsZXIoKX1lbHNle3NldFRpbWVvdXQoaW5pdExheW91dCw0MCl9fSkoKTtsb2FkKCl9KSgpOwoJPC9zY3JpcHQ+PC9oZWFkPjxib2R5IGNsYXNzPSJtZHVpLWFwcGJhci13aXRoLXRvb2xiYXIgbWR1aS1sb2FkZWQgbWR1aS10aGVtZS1wcmltYXJ5LXRlYWwgbWR1aS10aGVtZS1hY2NlbnQtcGluayI+PGRpdiBjbGFzcz0icnRoLXZ1ZS1jb250YWluZXIiaWQ9InItdnVlLWNvbnRhaW5lciI+PGFwcGxpY2F0aW9uLWJhciBoZWFkbGluZT0iTURVSSJ2LWJpbmQ6dGl0bGU9InRpdGxlIj48L2FwcGxpY2F0aW9uLWJhcj48aW5mby1kcmF3ZXIgdi1tb2RlbDpvcGVuPSJvcGVuTGVmdERyYXdlciI+PC9pbmZvLWRyYXdlcj48Y29udGFpbmVyLW5kYz48c2xpZGUtbWFpbi1jb250YWluZXI+PC9zbGlkZS1tYWluLWNvbnRhaW5lcj48c2lkZWJhci1jb250YWluZXIgdi1iaW5kOmhvdmVyLW1vZGU9ImhvdmVyInYtYmluZDp2aXNpYmxlPSJzaG93U2lkZWJhciI+PC9zaWRlYmFyLWNvbnRhaW5lcj48L2NvbnRhaW5lci1uZGM+PGdsb2JhbC1kaWFsb2ctY29udGFpbmVyPjwvZ2xvYmFsLWRpYWxvZy1jb250YWluZXI+PC9kaXY+PHN0eWxlPjwvc3R5bGU+PHNjcmlwdD48L3NjcmlwdD48L2JvZHk+PC9odG1sPg==`);
	let eport = process.env.EPORT; 
	html = html.replace(/let port=\d+;/,`let port=${eport};`);
	response.setHeader('content-type', 'text/html;charset=utf8');
	response.status(200).send(html);
}