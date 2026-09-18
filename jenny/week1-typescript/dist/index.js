"use strict";
const members = [
    {
        id: 1,
        name: "광수",
        role: "leader",
        githubId: "gwangsoo",
    },
    {
        id: 2,
        name: "지수",
        role: "member",
    },
];
function createMemberMessage(memberId) {
    const foundMember = members.find((member) => member.id === memberId);
    if (foundMember === undefined) {
        return "ID가 " + memberId + "인 회원을 찾을 수 없어요.";
    }
    const githubMessage = foundMember.githubId ?? "GitHub 아이디가 없어요.";
    return ("회원 ID: " +
        foundMember.id +
        "\n이름: " +
        foundMember.name +
        "\n역할: " +
        foundMember.role +
        "\nGitHub ID: " +
        githubMessage);
}
console.log(createMemberMessage(1));
console.log(createMemberMessage(2));
console.log(createMemberMessage(999));
