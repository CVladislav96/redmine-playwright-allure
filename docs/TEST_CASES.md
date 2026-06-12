# Test Case Specification — Redmine Public Site

---

## TC-001 · Home page loads with status 200 and has main navigation

| Field | Details |
|---|---|
| **Priority** | 🔴 High |
| **Area** | Home |
| **Preconditions** | The redmine.org site is accessible. |

**Steps:**
1. Open the home page via `HomePage`.
2. Verify the Redmine heading.
3. Verify navigation items: `Download`, `Issues`, `Wiki`, `Forums`.

**Expected Result:**
Home page opens; key navigation elements are displayed.

---

## TC-002 · Download page shows release artifacts

| Field | Details |
|---|---|
| **Priority** | 🔴 High |
| **Area** | Download |
| **Preconditions** | The public Download page is accessible. |

**Steps:**
1. Open the Download page via `HomePage`.
2. Verify the Download heading.
3. Verify the **Latest releases** block.
4. Verify the presence of `.zip` and `.tar.gz` links.

**Expected Result:**
Download page opens; latest releases and archive links are visible.

---

## TC-003 · Issues list is available

| Field | Details |
|---|---|
| **Priority** | 🔴 High |
| **Area** | Issues |
| **Preconditions** | The Redmine project issue list is publicly accessible. |

**Steps:**
1. Open the Issues page via `HomePage`.
2. Verify the Issues heading.
3. Verify the **Filters** block and **Apply** button.
4. Verify the first row of the issues table.

**Expected Result:**
Issues list is displayed; filters are present and at least one issue exists.

---

## TC-004 · Wiki page shows project content

| Field | Details |
|---|---|
| **Priority** | 🟡 Medium |
| **Area** | Wiki |
| **Preconditions** | The Redmine project Wiki is accessible without authorization. |

**Steps:**
1. Open Wiki via `HomePage`.
2. Verify the Redmine heading.
3. Verify the **Features** and **Documentation** sections.

**Expected Result:**
Wiki opens; main informational sections are visible.

---

## TC-005 · Search returns results for "installation"

| Field | Details |
|---|---|
| **Priority** | 🟡 Medium |
| **Area** | Search |
| **Preconditions** | The site search is publicly accessible. |

**Steps:**
1. Open the home page via `HomePage`.
2. Perform a search for the word `installation`.
3. Verify the results page via `SearchPage`.

**Expected Result:**
Search results page opens; query is preserved; matching content is found.

---

## Summary

| ID | Title | Priority | Area |
|---|---|---|---|
| TC-001 | Home page loads with status 200 and has main navigation | 🔴 High | Home |
| TC-002 | Download page shows release artifacts | 🔴 High | Download |
| TC-003 | Issues list is available | 🔴 High | Issues |
| TC-004 | Wiki page shows project content | 🟡 Medium | Wiki |
| TC-005 | Search returns results for "installation" | 🟡 Medium | Search |
