import { render } from '@testing-library/react';

import Icon60 from './icon60';

describe('Icon60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon60 />);
    expect(baseElement).toBeTruthy();
  });
});
