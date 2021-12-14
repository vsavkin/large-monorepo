import { render } from '@testing-library/react';

import ImportantComponent5 from './important-component-5';

describe('ImportantComponent5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent5 />);
    expect(baseElement).toBeTruthy();
  });
});
