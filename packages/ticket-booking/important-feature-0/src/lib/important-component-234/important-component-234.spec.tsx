import { render } from '@testing-library/react';

import ImportantComponent234 from './important-component-234';

describe('ImportantComponent234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent234 />);
    expect(baseElement).toBeTruthy();
  });
});
