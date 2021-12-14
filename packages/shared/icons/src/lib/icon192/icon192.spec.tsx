import { render } from '@testing-library/react';

import Icon192 from './icon192';

describe('Icon192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon192 />);
    expect(baseElement).toBeTruthy();
  });
});
