import { render } from '@testing-library/react';

import ImportantComponent10 from './important-component-10';

describe('ImportantComponent10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent10 />);
    expect(baseElement).toBeTruthy();
  });
});
