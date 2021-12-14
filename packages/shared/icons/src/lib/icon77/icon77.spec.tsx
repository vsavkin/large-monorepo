import { render } from '@testing-library/react';

import Icon77 from './icon77';

describe('Icon77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon77 />);
    expect(baseElement).toBeTruthy();
  });
});
