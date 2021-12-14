import { render } from '@testing-library/react';

import Icon1 from './icon1';

describe('Icon1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon1 />);
    expect(baseElement).toBeTruthy();
  });
});
