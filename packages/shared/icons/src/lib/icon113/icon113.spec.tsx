import { render } from '@testing-library/react';

import Icon113 from './icon113';

describe('Icon113', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon113 />);
    expect(baseElement).toBeTruthy();
  });
});
