import { render } from '@testing-library/react';

import Icon122 from './icon122';

describe('Icon122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon122 />);
    expect(baseElement).toBeTruthy();
  });
});
