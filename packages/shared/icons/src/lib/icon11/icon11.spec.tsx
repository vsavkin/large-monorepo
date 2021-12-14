import { render } from '@testing-library/react';

import Icon11 from './icon11';

describe('Icon11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon11 />);
    expect(baseElement).toBeTruthy();
  });
});
