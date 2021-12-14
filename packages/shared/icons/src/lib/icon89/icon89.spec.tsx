import { render } from '@testing-library/react';

import Icon89 from './icon89';

describe('Icon89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon89 />);
    expect(baseElement).toBeTruthy();
  });
});
