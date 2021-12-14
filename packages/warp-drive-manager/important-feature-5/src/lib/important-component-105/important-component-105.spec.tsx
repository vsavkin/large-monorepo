import { render } from '@testing-library/react';

import ImportantComponent105 from './important-component-105';

describe('ImportantComponent105', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent105 />);
    expect(baseElement).toBeTruthy();
  });
});
