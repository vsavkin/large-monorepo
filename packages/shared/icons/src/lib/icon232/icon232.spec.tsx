import { render } from '@testing-library/react';

import Icon232 from './icon232';

describe('Icon232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon232 />);
    expect(baseElement).toBeTruthy();
  });
});
