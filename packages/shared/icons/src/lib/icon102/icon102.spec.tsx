import { render } from '@testing-library/react';

import Icon102 from './icon102';

describe('Icon102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon102 />);
    expect(baseElement).toBeTruthy();
  });
});
