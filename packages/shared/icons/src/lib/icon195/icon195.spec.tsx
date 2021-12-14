import { render } from '@testing-library/react';

import Icon195 from './icon195';

describe('Icon195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon195 />);
    expect(baseElement).toBeTruthy();
  });
});
