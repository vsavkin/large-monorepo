import { render } from '@testing-library/react';

import ImportantComponent146 from './important-component-146';

describe('ImportantComponent146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent146 />);
    expect(baseElement).toBeTruthy();
  });
});
